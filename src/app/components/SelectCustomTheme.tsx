import { useState } from 'react';
import { Button, FormGroup, Label, Select } from '../../ui/';

export const SelectCustomTheme: React.FC<SelectCustomThemeProps> = (props) => {
  const [selectedColor, setSelectedColor] = useState<string>(() => 'red');

  const onClickHandler = () => {
    props.onSelectTheme(selectedColor);
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (ev) => {
    setSelectedColor(ev.target.value);
  };

  return (
    <div>
      <FormGroup>
        <Label>Select custom theme color</Label>
        <Select onChange={onChangeHandler}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Button onClick={onClickHandler}>Set custom theme</Button>
      </FormGroup>
    </div>
  );
};

interface SelectCustomThemeProps {
  onSelectTheme: (theme: string) => void;
}
