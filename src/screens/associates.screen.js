import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AssociatesContainer} from '../containers';
import {
  getAssociatesList,
  updateAssociatesListFromAPI,
} from '../slices/associates.slices';

export const AssociatesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const pageDetails = useSelector(state => state.associates.pageDetails);
  const associatesList = useSelector(state => state.associates.associatesList);
  const associatesFormList = useSelector(
    state => state.associatesForm.associateFormList,
  );
  const [isAssociateLoading, setAssociateLoading] = useState(false);
  const onTapAdd = () => {
    navigation.push('createNewAssociates');
  };
  const [page, setPage] = useState(1);
  const _getAssociatesList = () => {
    if (page == 1) {
      setAssociateLoading(true);
    }
    let params = {
      lang_id: 1,
      page: page,
    };
    dispatch(
      getAssociatesList({
        params,
        callback: (status, response) => {
          setAssociateLoading(false);
        },
      }),
    );
  };
  useEffect(() => {
    if (associatesList.length == 0) {
      dispatch(
        updateAssociatesListFromAPI(associatesList.concat(associatesFormList)),
      );
    }
  }, []);
  useEffect(() => {
    _getAssociatesList();
  }, [page]);
  const fetchMoreData = () => {
    if (page < pageDetails?.totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <AssociatesContainer
      navigation={navigation}
      onTapAdd={onTapAdd}
      fetchMoreData={fetchMoreData}
      isLoading={page < pageDetails?.totalPages ? true : false}
      isAssociateLoading={isAssociateLoading}
    />
  );
};
