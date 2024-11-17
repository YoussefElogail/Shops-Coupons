import { useTranslations } from "next-intl";
type Props = {
  mainTitleKey: string;
  secondTitleKey: string;
  descriptionKey: string;
  section: string;
};
export default  function SectionHead({
  mainTitleKey,
  secondTitleKey,
  descriptionKey,
  section="coupons",
}: Props) {
  const t = useTranslations(section);

  return (
    <>
      <h2 className="capitalize text-4xl text-center my-7">
        {t(mainTitleKey)}
      </h2>
      <div className="bg-white rounded-md shadow-lg p-4 my-4">
        <h3 className="text-xl font-bold my-3">{t(secondTitleKey)}</h3>
        <p>{t(descriptionKey)}</p>
      </div>
    </>
  );
}
