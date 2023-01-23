import { useMemo } from "react";
import { useRouter } from "next/router";

const useLanguage = <T extends any>(tr: T, en: T) => {
  const router = useRouter();

  const lang: T = useMemo(
    () => (router.locale === "tr" ? tr : en),
    [router.locale]
  );

  return { lang };
};

export default useLanguage;
