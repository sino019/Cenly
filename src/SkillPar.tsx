import IconCloud from './components/ui/icon-cloud';

const slugs = [
  'html5',
  'css3',
  'javascript',
  'react',
  'typescript',
  'php',
  'yii',
  'mysql',
  'bootstrap',
  'tailwindcss',
];

const SkillPar = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center py-10 ">MY SKILLS</h2>
      <div className="flex justify-center">
        <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </>
  );
};

export default SkillPar;
