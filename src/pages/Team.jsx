import React from "react";

function Team() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow">
        <h1 className="text-center mt-6 font-bold text-3xl">
          This is Team page
        </h1>
      </main>

      <Footer />
    </div>
  );
}

export default Team;
