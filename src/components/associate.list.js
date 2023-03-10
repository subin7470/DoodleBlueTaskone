import React from 'react';
import {Text, View} from 'react-native';
import {associatesStyles} from '../styles';

export const AssociateListComponent = ({
  name,
  categoryName,
  description,
  associate,
  type,
}) => {
  return (
    <View style={associatesStyles.associatesListContainer}>
      <View style={associatesStyles.associatesListContainerTitleRow}>
        <Text style={associatesStyles.associatesListContainerTitle}>
          {name}
        </Text>
        <Text style={associatesStyles.activeText}>{type}</Text>
      </View>
      <View style={associatesStyles.listContainerAddressRow}>
        <Text style={associatesStyles.listContainerAddresscolumn1}>
          {categoryName}
        </Text>
        <Text style={associatesStyles.listContainerAddresscolumn2}>
          {description}
        </Text>
      </View>
      <View style={associatesStyles.listContainerAddressRow}>
        <Text style={associatesStyles.listContainerAddresscolumn1}>
          IN 46221
        </Text>
        <Text style={associatesStyles.listContainerAddresscolumn2}>
          Indianpolis Mont
        </Text>
      </View>
      <View style={associatesStyles.listContainerAddressRow}>
        <Text style={associatesStyles.listContainerAddresscolumn1}>
          Clientele type
        </Text>
        <Text style={associatesStyles.listContainerAddresscolumn2}>
          Price 1 - Price 1
        </Text>
      </View>
    </View>
  );
};
