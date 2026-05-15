import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem('bank_auth_token');

 /* useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);*/

  const handleLogout = () => {
    localStorage.removeItem('bank_auth_token');
    navigate('/login');
  };

  // if (!token) return null; 

   return (
    <div className="min-h-screen bg-[#f4f1ea] px-4 md:px-6 py-6 md:py-8 overflow-x-hidden">

      {/* TOP NAVBAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 mb-10 md:mb-12">

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2563eb] break-words"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Probably<span className="text-black">ABank</span>
        </h1>

        <button
          onClick={handleLogout}
          className="bg-black hover:bg-gray-800 text-white px-3 md:px-5 py-2 rounded-xl transition duration-300 text-sm md:text-base whitespace-nowrap"
        >
          Log Out
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto mb-14">

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-[320px] sm:max-w-none">
          Everything money.
          <br />
          One dashboard.
        </h2>

        <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-600 max-w-2xl leading-7 md:leading-8">
          Manage bank accounts, make UPI transfers, track balances,
          and handle payments — all from one place.
        </p>
      </div>

      {/* MAIN CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* BANK CARD */}
        <Link to="/dashboard">

          <div className="bg-[#0f172a] text-white rounded-[28px] p-10 min-h-[380px] md:min-h-[320px] flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-xl cursor-pointer">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Banking
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mt-4">
                Accounts & Balances
              </h3>

              <p className="mt-6 text-gray-300 leading-8 text-lg">
                Create bank accounts, manage balances,
                and stay on top of your finances.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[#7dd3fc] font-semibold">
                Open Dashboard →
              </p>

              <div className="bg-white/10 px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm">
                Secure Banking
              </div>
            </div>
          </div>
        </Link>

        {/* UPI CARD */}
        <Link to="/upi">

          <div className="bg-white rounded-[28px] p-6 md:p-10 min-h-[320px]  flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-xl border border-gray-200 cursor-pointer">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Payments
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                UPI & Transfers
              </h3>

              <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
                Send money instantly, manage UPI IDs,
                and transfer funds without the drama.
              </p>
            </div>

            <div className="flex items-center justify-between">

              <p className="text-[#2563eb] font-semibold">
                Start Transfer →
              </p>

              <div className="bg-gray-100 px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm text-gray-700">
                Instant Payments
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* FOOTER TEXT */}
      <div className="max-w-7xl mx-auto mt-12">

        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">

          <p
            className="text-[#2563eb] text-xl font-semibold tracking-tight"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            “If it involves money, we do it.”
          </p>

          <p className="text-gray-500 text-sm mt-2 leading-7">
            Probably the most responsible financial decision you’ll make today.
          </p>

        </div>
      </div>
    </div>
  );
}