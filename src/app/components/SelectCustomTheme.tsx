import { Button, FormGroup, Label, Select } from '../../ui/';

export const SelectCustomTheme: React.FC = () => {
  return (
    <div>
      <FormGroup>
        <Label>Select custom theme color</Label>
        <Select>
          <option value="red">red</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>Select which state manager</Label>
        <Select>
          <option value="reactcontext">react context</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Button>Set custom theme</Button>
      </FormGroup>
    </div>
  );
};
