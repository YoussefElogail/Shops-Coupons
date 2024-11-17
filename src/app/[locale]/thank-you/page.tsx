import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Flame, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
export default function App() {
  const t = useTranslations("thankYou");
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Flame className="w-16 h-16 mx-auto text-orange-500 mb-4" />
          <CardTitle className="text-2xl font-bold">
            {t("thankYouTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-700 mb-4">{t("thankYouMessage")}</p>
          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              {t("hotOffersTitle")}
            </h3>
            <p className="text-sm text-orange-600">{t("hotOffersMessage")}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Link href="/">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 font-bold">
              {t("returnHome")}
            </Button>
          </Link>
          <div className="flex items-center text-sm text-gray-500">
            <Mail className="w-4 h-4 mr-2" />
            <span>{t("checkEmailMessage")}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
