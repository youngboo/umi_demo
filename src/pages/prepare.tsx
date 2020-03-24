/* eslint-disable prefer-const */
import * as React from 'react';

import { Divider, message, Tabs } from 'antd';
import { ColumnProps } from 'antd/lib/table';

const co = require('co');
const uuidv1 = require('uuid/v1');

interface IPrepareLessonContent {
  url: string;
  title: string;
}

interface IPrepareLesson {
  stageId: number;
  stage: null | any;
  topicId: number;
  topic: null | any;
  textbookId: number;
  textbook: null | any;
  tbSectionId: number;
  tbSection: null | any;
  name: string;
  content: IPrepareLessonContent[];
  teacherUser: null;
  id: 1;
}
const TabPane = Tabs.TabPane;

class PrepareLessons extends React.Component<any, any> {
  public mounted: boolean = false;

  public searchForm: any = null;

  public createModal: any;

  public uploading: boolean = false;

  constructor(props: any) {
    super(props);
    let userInfo: any;
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }
    let teacherUserId: number | undefined = void 0;
    if (userInfo) {
      teacherUserId = userInfo.id;
    }
    this.state = {
      height: 0,
      teacherUserId,

      dataSource: [],

      current: 1,
      pageSize: 10,
      totalCount: 0,

      conditions: {} as any,

      loading: false,

      uploading: false,
    };
  }

  updateHeight = () => {
    const height = document.documentElement.clientHeight - 110;
    this.setState({
      ...this.state,
      height,
    });
  };

  handleResize = () => {
    this.updateHeight();
  };

  componentDidMount() {
    this.mounted = true;
    this.updateHeight();
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize, false);
    this.load();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
    this.mounted = false;
  }

  searchFormRef = (node: any) => {
    this.searchForm = node;
  };

  handleSearch = (values: any) => {
    const { keyword } = values;
    const conditions: any = {};
    if (keyword) {
      conditions.keyword = keyword;
    } else {
      conditions.keyword = void 0;
    }
    this.load({
      skipCount: 0,
      ...conditions,
    });
  };

  reload = (callback?: () => any) => {
    return this.load({}, callback);
  };

  load = (otherParams: any = {}, callback?: any) => {
    const { current, pageSize, teacherUserId, conditions } = this.state;
    if (teacherUserId) {
      this.setState({
        loading: true,
      });
      // request('/')
      return new Promise((resolve: any) => resolve());
    }
    return undefined;
  };

  handleChangePage = (current: number, pageSize: number) => {
    this.setState({
      current,
      pageSize,
    });
    this.load({
      skipCount: (current - 1) * pageSize,
      maxResultCount: pageSize,
    });
  };

  // handleDeletePreparelesson
  handleDeletePreparelesson = (id: number) => {
    const { current, pageSize, dataSource } = this.state;
    // 删除备课
    if (!id) {
      return message.info('备课不存在');
    }
  };

  createModalRef = (node: any) => {
    this.createModal = node;
  };

  render() {
    const self = this;
    const {
      height,
      dataSource,
      current,
      pageSize,
      totalCount: total,
      loading,
      uploading,
    } = this.state;
    const pagination = {
      total,
      current,
      pageSize,
      onChange: this.handleChangePage,
    };

    const columns: ColumnProps<any>[] = [
      {
        key: 'id',
        title: 'ID',
        dataIndex: 'id',
      },
      {
        key: 'name',
        title: '备课名',
        dataIndex: 'name',
      },
    ];
    return (
      <div
        className="app-prepare-lessons clearfix"
        style={{ height: `${height}px` }}
      >
        <h1>备课</h1>

        <Divider />
      </div>
    );
  }
}

export default PrepareLessons;
