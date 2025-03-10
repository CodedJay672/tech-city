import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";

const investmentPackages = [
  {
    name: "General Investors",

    minInvestment: " ₦500k - ₦950k",
    roi: "38%",
    Timeline: "12 Months",
  },
  {
    name: "Silver Partners",
    minInvestment: "₦1m - ₦5m",
    roi: "47%",
    Timeline: "12 Months",
  },
  {
    name: "Bronze Partners",
    minInvestment: "₦10m - ₦50m",
    roi: "56%",
    Timeline: "12 Months",
  },
  {
    name: "Gold Partners",
    minInvestment: "₦75m - ₦150m",
    roi: "66%",
    Timeline: "15 Months",
  },
  {
    name: "Core Partners",
    minInvestment: "₦200m - ₦500m",
    roi: "70%",
    Timeline: "15 Months",
  },
  {
    name: "Premium Partners",
    minInvestment: "₦1b - ₦5b",
    roi: "56%",
    Timeline: "15 Months",
  },
];

const InvestmentModal = ({ openModal, closeModal }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openModal]);

  return (
    <div className="w-full">
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        contentLabel="Investment Packages"
        overlayClassName="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
      >
        <div className="w-full lg:w-4/5 mx-auto py-6">
          <div className="flex items-center justify-between w-full gap-4">
            <h2 className="flex-1 text-3xl lg:text-5xl text-center text-blue-900 font-bold">
              What We Offer
            </h2>
            <MdClose onClick={closeModal} size={24} />
          </div>

          <div className="w-full mt-6">
            <p className="text-base lg:text-lg font-medium">
              This investment packages are tiered structure offering various
              levels of investment with corresponding returns. Here's a
              breakdown:
            </p>
            <ul className="w-full mt-6">
              {investmentPackages.map((pkg, index) => (
                <li key={index} className="w-full bg-gray-50 rounded-lg mb-4">
                  <div className="w-full flex gap-1">
                    <div className="w-full p-2 bg-gray-100">
                      <h1 className="text-sm lg:text-lg font-medium">
                        Package
                      </h1>
                      <p className="text-sm lg:text-base font-bold">
                        {pkg.name}
                      </p>
                    </div>
                    <div className="w-full p-2 bg-gray-100">
                      <h1 className="text-sm lg:text-lg font-medium">
                        Min Investment
                      </h1>
                      <p className="text-sm lg:text-base font-bold">
                        {pkg.minInvestment}
                      </p>
                    </div>
                    <div className="w-full p-2 bg-gray-100">
                      <h1 className="text-sm lg:text-lg font-medium">ROI</h1>
                      <p className="text-sm lg:text-base font-bold">
                        {pkg.roi}
                      </p>
                      <h1 className="text-sm lg:text-lg font-medium mt-4">
                        Timeline
                      </h1>
                      <p className="text-sm lg:text-base font-bold">
                        {pkg.Timeline}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-base font-semibold mt-4">
              Additional Benefits
            </h1>
            <p className="text-sm font-medium mt-2">
              Investors from Bronze to Premium tiers may receive additional
              financial benefits from housing sales, potentially increasing
              their ROI to over 100%. However, this is:
            </p>
            <ul className="my-4 font-medium text-sm">
              <li>Not guaranteed</li>
              <li>Subject to negotiation</li>
              <li>Considered a bonus</li>
            </ul>

            <p className="text-sm font-medium">
              Please note that this information seems to be promotional and may
              require further verification. It's essential to conduct thorough
              research, consult with financial experts, and carefully review the
              terms and conditions before making any investment decisions.
            </p>
          </div>

          <div className="w-full flex justify-center mt-6">
            <button
              className="bg-blue-950 text-white p-4 rounded-lg font-semibold cursor-pointer"
              onClick={closeModal}
            >
              Get Started
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InvestmentModal;
