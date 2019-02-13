import React from 'react';
import branch from 'recompose/branch';

import Button from '../04/Button';

// export default branch(
//   ({ isLoading }) => isLoading,
//   (ButtonComponent) => () => <ButtonComponent disabled>로딩중</ButtonComponent>,
// )(Button);

function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return <Button disabled>로딩중</Button>
}

export default branch(
  isLoading,
  () => LoadingButton,
)(Button);