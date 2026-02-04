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
      <div 
        style={{
          width: '120px',
          height: '80px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: '8px'
        }}
      />
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
      <div 
        style={{
          width: '120px',
          height: '80px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F'
        }}
      />
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
      <div 
        style={{
          width: '120px',
          height: '80px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          boxShadow: '0 4px 10px -2px #1018280A, 0 2px 6px -2px #10182814'
        }}
      />
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
      <div 
        style={{
          width: '120px',
          height: '80px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          boxShadow: '0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814'
        }}
      />
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