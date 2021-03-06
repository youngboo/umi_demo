export default function(initialState: any) {
  const { userId, role } = initialState;

  return {
    canReadFoo: userId === 1,
    canReadCoo: userId === 2,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (foo: any) => {
      return foo.ownerId === userId;
    },
  };
}
