import { Form } from '../../form/Form';
import { SectionColor } from './SectionColor';

export const SectionForm = ({ section, formsCollection }: { section: any; formsCollection: any[]}) => {
  return (
    <SectionColor id={'contact'} bg={'pt-12'}>
      <Form section={section} formsCollection={formsCollection} />
    </SectionColor>
  );
};
