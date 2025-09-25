import Button from "@/components/common/Button";

type Props = {};

const about = () => {
  return (
    <>
      <div className="p-8 flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold">About Page</h1>

        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm" />
          <Button size="medium" shape="rounded-md" />
          <Button size="large" shape="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default about;
