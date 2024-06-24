import React from "react";

import { SquareTerminal } from "lucide-react";

function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 place-items-center lg:place-items-end lg:grid-cols-4 relative z-10 py-10 mb-48">
      <Feature
        title="Dashboard"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
        borderBottom
      />
      <Feature
        title="Enrollment"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
        borderBottom
      />
      <Feature
        title="Announcement"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
        borderBottom
      />
      <Feature
        title="Grading"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
        borderBottom
      />
      <Feature
        title="Schedule"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
      />
      <Feature
        title="User Management"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
      />
      <Feature
        title="Classroom Management"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
      />
      <Feature
        title="Profile Management"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        icon={<SquareTerminal />}
      />
    </div>
  );
}

function Feature({
  title,
  description,
  icon,
  borderBottom,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderBottom?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col lg:border-r py-10 relative group dark:border-neutral-800 ${
        borderBottom ? "lg:border-b" : ""
      }`}
    >
      <div
        className={`opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-violet-50 dark:from-neutral-800 to-transparent pointer-events-none ${
          !borderBottom ? "lg:bg-gradient-to-b" : ""
        } `}
      ></div>

      <div className="mb-4 relative z-10 px-10">{icon}</div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary transition duration-200"></div>

        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>

      <p className="text-sm text-muted-foreground max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}

export default Features;
