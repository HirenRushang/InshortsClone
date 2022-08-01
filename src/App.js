import React from "react";
import { Suspense } from "react";
const Navigation = React.lazy(()=>import("./Navigation/Navigation"))


const Footer = React.lazy(()=>import("./Footer/Footer"))

const NewsComponents = React.lazy(()=>import("./NewsComponents/NewsComponents"))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
      <Navigation />
      </Suspense>
      <Suspense fallback={<div>Loading....</div>}>
      <NewsComponents />
      </Suspense>
      <Suspense fallback={<div>Loading....</div>}>
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
