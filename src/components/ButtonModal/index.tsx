import * as React from 'react';
import { Button, message, Modal } from 'antd';
// import CustomModal from '../CustomModal';
import { isUndefined } from 'lodash-es';
import CommonModal from 'Src/pages/index/containers/LearningAnalysisNew/components/CommonModal';

interface IButtonModalProps {
  [propName: string]: any;
}
interface IButtonModalState {
  top?: number;
  left?: number;
  visible: boolean;
  confirmLoading: boolean;
}

class ButtonModal extends React.Component<IButtonModalProps, IButtonModalState> {
  constructor(props: IButtonModalProps) {
    super(props);
    const top = props.style && props.style.top ? props.style.top : undefined;
    this.state = {
      top,
      visible: false,
      confirmLoading: false,
    };
  }

  _handleClickBtn = (e: any) => {
    const { button } = this.props;
    const { onClick } = button;
    let r;
    if (onClick) {
      r = onClick(e);
    }
    if (r && 'then' in r) {
      r.then((res: boolean) => {
        if (res !== false) {
          this.setState({
            visible: true,
          });
        }
      });
    } else if (r !== false) {
      this.setState({
        visible: true,
      });
    }
  };

  _handleCancel = (e: any) => {
    // if (e) {
    //     e.stopPropagation();
    //     e.nativeEvent.stopPropagation();
    // }
    this.setState({
      visible: false,
    });
    const { modal = {} } = this.props;
    const { onCancel } = modal;
    if (onCancel) {
      onCancel(e);
    }
  };

  _handleCancelNew = (e: any) => {
    const { modal = {} } = this.props;
    const { onCancel } = modal;
    if (onCancel) {
      const res = onCancel(e);
      // console.log('res返回值', res);
      if (res && res instanceof Promise) {
        res.then((result: any) => {
          const flag = result !== undefined || result !== null ? result : true;
          this.setState({
            visible: !flag,
          });
        });
      } else {
        this.setState({
          visible: false,
        });
      }
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  _handleCancelWithTips = (e?: any) => {
    this.setState({ confirmLoading: false });
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
    }
    const { modal = {} } = this.props;
    const { cancelTips } = modal;
    if (cancelTips && cancelTips.show) {
      this._handleTips(cancelTips, e);
    } else {
      this._handleCancelNew(e);
    }
  };

  _handleTips = (tips: any, e: any) => {
    const self = this;
    const confirm = Modal.confirm;
    confirm({
      title: tips.title ? tips.title : '您确定要关闭当前页面吗？',
      content: tips.content ? tips.content : '当前未保存的数据将丢失',
      okText: tips.okText ? tips.okText : '确认',
      okType: tips.okType ? tips.okType : '',
      cancelText: tips.cancelText ? tips.cancelText : '取消',
      onOk() {
        self._handleCancel(e);
      },
      onCancel() {},
    });
  };

  _handleOk = (e?: any) => {
    const self = this;
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
    }
    const { modal = {} } = this.props;
    const { onOk } = modal;
    if (onOk) {
      this.setState({ confirmLoading: true });
      const res = onOk(e);
      if (res instanceof Promise) {
        res
          .then((data: any) => {
            if (data === true) {
              self.setState({
                confirmLoading: false,
                visible: false,
              });
            } else {
              setTimeout(() => {
                this.setState({ confirmLoading: false });
              }, 1000);
            }
          })
          .catch((err: any) => {
            // 提示返回信息
            try {
              message.destroy();
            } catch (error) {
              //
            }
            self.setState({
              confirmLoading: false,
            });
            message.error(err.message);
          });
      } else {
        if (res === true) {
          self.setState({
            confirmLoading: false,
            visible: false,
          });
        }
        if (res && res.message) {
          // 提示返回信息
          try {
            message.destroy();
          } catch (error) {
            //
          }
          self.setState({
            confirmLoading: false,
          });
          message.error(res.message);
        }
      }
    } else {
      self.setState({
        confirmLoading: false,
        visible: false,
      });
    }
    setTimeout(() => {
      this.setState({ confirmLoading: false });
    }, 1500);
  };

  _handleDrag = (e: any) => {
    this.setState({ top: e.clientY - 32, left: e.clientX - 60 });
  };

  render() {
    const { confirmLoading } = this.state;
    const { button = {}, modal = {}, children, render, ...otherProps } = this.props;
    const { title, style, draggable, onOk, onCancel, footer, onlyCloseButton, ...modalProps } = modal;
    const { visible } = this.state;
    let newTitle = !isUndefined(title) ? title : button.text;
    if (draggable) {
      newTitle = (
        <span
          draggable
          onDrag={this._handleDrag}
          onDragEnd={this._handleDrag}
          style={{ cursor: 'move' }}
          ref={node => {
            (this as any).modalTitle = node;
          }}
        >
          {title}
        </span>
      );
    }
    const modalStyle = {
      ...style,
      top: this.state.top,
      marginLeft: this.state.left,
    };

    const renderButton = () => {
      if (button.content) {
        return (
          <span className="button-modal__btn" style={{ cursor: 'pointer' }} onClick={this._handleClickBtn}>
            {button.content}
          </span>
        );
      }
      return (
        <Button {...button} onClick={this._handleClickBtn}>
          {button.text}
        </Button>
      );
    };

    let modalFooter: null | undefined | React.ReactNode = footer;
    if (modalFooter !== null && typeof modalFooter === 'function') {
      modalFooter = footer({
        onOk: this._handleOk,
        onCancel: this._handleCancel,
      });
    }
    // 只显示关闭按钮
    if (onlyCloseButton) {
      modalFooter = (
        <Button type="primary" onClick={this._handleCancel}>
          关闭
        </Button>
      );
    }

    return (
      <span {...otherProps}>
        {renderButton()}
        <CommonModal
          visible={visible}
          onCancel={this._handleCancelWithTips}
          onOk={this._handleOk}
          title={newTitle}
          {...modalProps}
          footer={modalFooter}
          style={modalStyle}
          confirmLoading={confirmLoading}
          destroyOnClose
        >
          {this.props.render ? this.props.render({ onOk: this._handleOk, onCancel: this._handleCancel }) : children}
        </CommonModal>
      </span>
    );
  }
}

export default ButtonModal;
