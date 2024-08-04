// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkWithTransition } from "../link-with-transition";
import { Tag } from "../tag";
import { buttonVariants } from "../ui/button";

// Icons
import { ArrowRight, Calendar } from "lucide-react";

// Utils
import { formatDate } from "@/utils/formatDate";

interface ArticleCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
  categories?: string[];
}

export function PostCard({
  title,
  date,
  description,
  slug,
  categories,
}: ArticleCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center relative">
        <dl className="flex text-xs">
          <dt className="sr-only">Published at</dt>
          <dd className="flex items-center gap-2">
            <Calendar size={12} />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <CardTitle className="text-pretty text-lg line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="leading-10 text-pretty text-sm">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-5">
        <div className="flex flex-wrap gap-2 text-xs">
          {categories?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <LinkWithTransition
          href={"/" + slug}
          className={`${buttonVariants({
            variant: "purple",
          })} flex z-10`}
        >
          Read More
          <ArrowRight
            size={16}
            className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
          />
        </LinkWithTransition>
      </CardFooter>
    </Card>
  );
}
