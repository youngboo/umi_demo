import React, { useState } from 'react';
import styles from './index.less';
import { useAccess, Access } from 'umi';

export default () => {
  const access = useAccess(); // access 的成员: canReadFoo, canUpdateFoo, canDeleteFoo
  console.log(access, 'access');
  return (
    <div>
      <h1 className={styles.about_title}>about page</h1>
      <Access
        accessible={access.canReadFoo}
        fallback={<div>没有权限read Foo</div>}
      >
        有权限 read Foo
      </Access>
      <Access
        accessible={access.canReadCoo}
        fallback={<div>没有权限read Coo</div>}
      >
        有权限 read Coo
      </Access>
    </div>
  );
};
