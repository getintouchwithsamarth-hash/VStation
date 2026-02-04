export function NotFound() {
  return (
    <>
      <PageHeader />
      <PageBody />
    </>
  );
}

function PageHeader() {
  return (
    <>
      <ErrorTitleBlock />
    </>
  );
}

function PageBody() {
  return (
    <>
      <HelpfulLinks />
      <SearchCta />
      <BackToHomeCta />
    </>
  );
}

function ErrorTitleBlock() {
  return null;
}

function HelpfulLinks() {
  return null;
}

function SearchCta() {
  return null;
}

function BackToHomeCta() {
  return null;
}
