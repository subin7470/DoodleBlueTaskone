import {Icon} from '@rneui/themed';
import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  AssociateListComponent,
  HeaderComponent,
  IconButtonComponent,
  MainComponent,
} from '../components';
import {associatesStyles} from '../styles';
import {colours} from '../theme/colors';

export const AssociatesContainer = ({
  onTapAdd,
  navigation,
  fetchMoreData,
  isLoading,
  isAssociateLoading,
}) => {
  const associatesList = useSelector(state => state.associates.associatesList);
  return (
    <MainComponent>
      <HeaderComponent title={'Associates'} />
      <View
        style={{
          padding: 20,
        }}>
        <View style={associatesStyles.listHeader}>
          <Text style={associatesStyles.listHeaderTitle}>Associates List</Text>
          <View style={associatesStyles.listHeaderButtonRow}>
            <IconButtonComponent
              buttonStyle={associatesStyles.resetButton}
              titleStyle={associatesStyles.resetButtonTitle}
              ButtonIcon={() => (
                <Icon
                  size={16}
                  name="refresh"
                  type="simple-line-icon"
                  color={colours.dark_blue}
                />
              )}
              title={'RESET'}
            />
            <IconButtonComponent
              onPress={onTapAdd}
              buttonStyle={associatesStyles.addButton}
              titleStyle={associatesStyles.addButtonTitle}
              ButtonIcon={() => (
                <Icon
                  size={18}
                  name="plus"
                  type="antdesign"
                  color={colours.dark_blue}
                />
              )}
            />
          </View>
        </View>
        <FlatList
          refreshing={true}
          contentContainerStyle={associatesStyles.flatlistContainer}
          data={associatesList}
          showsVerticalScrollIndicator={false}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.2}
          ListFooterComponent={() =>
            isLoading && (
              <ActivityIndicator
                size={'large'}
                style={associatesStyles.footerActivityIndicator}
              />
            )
          }
          renderItem={({item, index}) => (
            <AssociateListComponent
              associate={item}
              name={item?.basicInfo ? item?.basicInfo?.companyName : item?.code}
              categoryName={
                item?.basicInfo
                  ? item?.basicInfo?.type?.label
                  : item?.omestiCode
              }
              description={
                item?.location
                  ? item?.location?.address?.label
                  : item?.description
              }
              type={item?.basicInfo ? 'Form' : 'Active'}
            />
          )}
        />
      </View>
      {isAssociateLoading && (
        <ActivityIndicator
          size={'large'}
          style={{position: 'absolute', alignSelf: 'center', top: '50%'}}
        />
      )}
    </MainComponent>
  );
};
