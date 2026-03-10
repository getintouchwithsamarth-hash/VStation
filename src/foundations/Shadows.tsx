// Shadow tokens

export function Shadows() {
  return (
    <>
      <ShadowLevels />
      <UsageRules />
    </>
  );
}

function ShadowLevels() {
  return (
    <div className="space-y-6">
      <Shadow0 />
      <Shadow1 />
      <Shadow2 />
      <Shadow3 />
    </div>
  );
}

function Shadow0() {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">Shadow / 0</div>
      <div className="text-xs text-gray-600">none</div>
      <div className="foundation-shadow-box foundation-shadow-box--none" />
    </div>
  );
}

function Shadow1() {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">Shadow / 1</div>
      <div className="text-xs text-gray-600">
        y 1, blur 2, spread 0, color #1018280A<br />
        y 1, blur 3, spread 0, color #1018280F
      </div>
      <div className="foundation-shadow-box foundation-shadow-box--1" />
    </div>
  );
}

function Shadow2() {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">Shadow / 2</div>
      <div className="text-xs text-gray-600">
        y 4, blur 10, spread -2, color #1018280A<br />
        y 2, blur 6, spread -2, color #10182814
      </div>
      <div className="foundation-shadow-box foundation-shadow-box--2" />
    </div>
  );
}

function Shadow3() {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">Shadow / 3</div>
      <div className="text-xs text-gray-600">
        y 12, blur 24, spread -4, color #1018280F<br />
        y 6, blur 12, spread -4, color #10182814
      </div>
      <div className="foundation-shadow-box foundation-shadow-box--3" />
    </div>
  );
}

function UsageRules() {
  return (
    <div className="space-y-2 mt-8">
      <div className="text-sm">Rule / Cards use Shadow-1</div>
      <div className="text-sm">Rule / Modals use Shadow-3</div>
      <div className="text-sm">Rule / Hover may step +1</div>
    </div>
  );
}
