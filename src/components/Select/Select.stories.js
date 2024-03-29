/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
import Select from '../../components/Select';
import SelectSkeleton from '../../components/Select/Select.Skeleton';
import SelectItem from '../../components/SelectItem';
import SelectItemGroup from '../../components/SelectItemGroup';

const props = {
  select: () => ({
    className: 'some-class',
    light: false,
    inline: false,
    disabled: false,
    hideLabel: false,
    invalid: false,
    invalidText: 'A valid value is required',
    helperText: 'Optional helper text.',
    onChange: action('onChange'),
  }),
  group: () => ({
    disabled: false,
  }),
};

export default {
  title: 'Select',
  component: Select,
  parameters: {
    componentSubtitle: `
    Select displays a list below its title when selected. They are used primarily in forms,
    where a user chooses one option from a list. Once the user selects an item, the dropdown will
    disappear and the field will reflect the user's choice. Create Select Item components for each
    option in the list. The example below shows an enabled Select component with three items.
  `,
  },
};

export const defaut = () => {
  const groupProps = props.group();
  return (
    <Select {...props.select()} id="select-1" defaultValue="placeholder-item">
      <SelectItem
        disabled
        hidden
        value="placeholder-item"
        text="Choose an option"
      />
      <SelectItemGroup label="Category 1" {...groupProps}>
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
      </SelectItemGroup>
      <SelectItemGroup label="Category 2" {...groupProps}>
        <SelectItem value="option-3" text="Option 3" />
        <SelectItem value="option-4" text="Option 4" />
      </SelectItemGroup>
    </Select>
  );
};
defaut.story = { name: 'Default' };

export const skeleton = () => (
  <div style={{ width: '300px' }}>
    <SelectSkeleton />
  </div>
);
