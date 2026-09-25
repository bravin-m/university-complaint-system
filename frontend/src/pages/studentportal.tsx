
function StudentPortal() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-5">
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Student Portal
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back, Bravin Moronge
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                Bravin Moronge
              </p>
              <p className="text-xs text-gray-500">
                BSc Applied Computer Science
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              BM
            </div>
          </div>

        </div>
      </header>


      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto">

        {/* Student Information */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">
              BM
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Bravin Moronge
              </h2>

              <p className="text-gray-500">
                Student ID: EGU/XXXX/XX
              </p>

              <p className="text-gray-500">
                BSc Applied Computer Science
              </p>
            </div>

          </div>

        </section>


        {/* Quick Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">
              Academic Status
            </p>

            <p className="text-xl font-bold text-gray-900 mt-2">
              Active
            </p>
          </div>


          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">
              Current Year
            </p>

            <p className="text-xl font-bold text-gray-900 mt-2">
              4th Year
            </p>
          </div>


          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">
              Fee Balance
            </p>

            <p className="text-xl font-bold text-gray-900 mt-2">
              KSh 24,500
            </p>
          </div>


          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">
              Current Semester
            </p>

            <p className="text-xl font-bold text-gray-900 mt-2">
              Semester 1
            </p>
          </div>

        </section>


        {/* Portal Sections */}
        <section>

          <h2 className="text-lg font-bold text-gray-900 mb-4">
            University Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Academic Records */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                📚
              </div>

              <h3 className="font-semibold text-gray-900">
                Academic Records
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                View your programme, registered units, marks and academic
                performance.
              </p>
            </div>


            {/* Finance */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                💰
              </div>

              <h3 className="font-semibold text-gray-900">
                Finance
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                View your fee structure, balance, payments, invoices and
                receipts.
              </p>
            </div>


            {/* Accommodation */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                🏠
              </div>

              <h3 className="font-semibold text-gray-900">
                Accommodation
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                View accommodation information, room allocation and related
                services.
              </p>
            </div>


            {/* Library */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                📖
              </div>

              <h3 className="font-semibold text-gray-900">
                Library
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                View borrowed books, due dates and library account
                information.
              </p>
            </div>


            {/* Complaints */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                ⚠️
              </div>

              <h3 className="font-semibold text-gray-900">
                Complaints
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Submit a complaint, upload supporting evidence and track your
                cases.
              </p>
            </div>


            {/* Personal Information */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center mb-4">
                👤
              </div>

              <h3 className="font-semibold text-gray-900">
                Personal Information
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                View your personal details, contact information and student
                profile.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentPortal;

