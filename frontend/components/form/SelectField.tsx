import { useField, useFormikContext } from 'formik';
import { Lang, useMainContext } from '../../context/context';
import { Button } from '../buttons/Button';

export const SumitButton = () => {
  const { lang } = useMainContext();
  const { handleSubmit } = useFormikContext();
  return (
    <Button onClick={handleSubmit} color={'purple'} isInternal={false} label={lang === Lang.EN ? 'Submit' : 'Enviar'} link={''} />
  );
};
export const InputField = ({ name, label, placeholder, type }: { name: string; label: string; placeholder?: string; type?: 'text' | 'tel' | 'number' | 'email'; }) => {
  const [field, meta] = useField(name);

  return (
    <div className="form-control w-full max-w-xs mb-3">
      <label className="label font-light ">
        <span className="label-text text-black/80">{label}</span>
      </label>
      <input {...field} type={type} placeholder={placeholder} className="input input-bordered w-full max-w-xs input-md bg-white autofill:bg-white autofill:text-black text-black border-black/30" />
      {meta && meta.touched && meta.error && <label className="label ">
        <span className="label-text-alt text-error">{meta.error}</span>
      </label>}
    </div>
  );

};
export const SelectField = ({ name, label, placeholder = 'Select a subject' }: { name: string; label: string; placeholder?: string; }) => {
  const [field, meta] = useField(name);

  return (
    <div className="form-control w-full max-w-xs  mb-3">
      <label className="label font-light ">
        <span className="label-text text-black/80">{label}</span>
      </label>
      <select {...field} className="select select-bordered input-md bg-white autofill:bg-white autofill:text-black text-black border-black/30">
        {field.value === placeholder && <option disabled>{placeholder}</option>}
        <option>Sales</option>
        <option>Staff augmentation</option>
        <option>Custom Software Development</option>
        <option>Cyber Security</option>
        <option>IT Consultancy and Training</option>
      </select>
      {meta && meta.touched && meta.error && <label className="label ">
        <span className="label-text-alt text-error">{meta.error}</span>
      </label>}
    </div>
  );
};
export const TextAreaField = ({ name, label, }: { name: string; label: string; }) => {
  const [field, meta] = useField(name);

  return (
    <div className="form-control w-full max-w-xs  mb-3">
      <label className="label font-light ">
        <span className="label-text text-black/80">{label}</span>
      </label>
      <textarea {...field} className="textarea textarea-bordered h-24 bg-white autofill:bg-white autofill:text-black text-black border-black/30"></textarea>
      {meta && meta.touched && meta.error && <label className="label ">
        <span className="label-text-alt text-error">{meta.error}</span>
      </label>}
    </div>
  );
};
