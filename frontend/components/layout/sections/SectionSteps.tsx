import { Step } from '../../steps/Step';
import { SectionColor } from './SectionColor';
import { SectionHeadline } from './SectionHeadline';

export const SectionSteps = ({ section, stepGraphics }: { section: any; stepGraphics: any[]; }) => {
  const stepsGraphic = stepGraphics?.find(x => x._id === section?.section_steps_graphic._ref); //stepsgraphics_collection_name /stepsgraphics_collection

  if (stepGraphics.length === 0)
    return null;

  return (
    <SectionColor>
      <SectionHeadline
        header={stepsGraphic.stepsgraphics_collection_name}
        body={stepsGraphic.stepsgraphics_collection_body} />
      <div className='flex flex-col justify-center'>
        {stepsGraphic.stepsgraphics_collection.map((x: any, k: number) => {
          return (
            <Step key={`graphic-step-${k}`} index={k} image={x.step_image} title={x.steps_graphic_title} body={x.steps_graphic_desc} />
          );
        })}
      </div>
    </SectionColor>
  );
};
