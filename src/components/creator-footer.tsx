import { CreatorSignature } from "./creator-signature";

export function CreatorFooter() {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto w-fit max-w-full">
        <CreatorSignature />
      </div>
    </div>
  );
}
