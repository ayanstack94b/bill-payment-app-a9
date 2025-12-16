import React, { useContext } from 'react';
import { sharedContext } from '../Layout/RootsLayout';
import { useLoaderData, useNavigate } from 'react-router';

const SingleBill = () => {
    const { balance, setBalance, paidBills, setPaidBills } = useContext(sharedContext);
    const bill = useLoaderData();
    const navigate = useNavigate();


    const isPaid = paidBills.includes(bill.id);

    const handlePayBill = () => {
        if (isPaid) {
            alert("This bill is already paid");
            return;
        }

        if (balance < bill.amount) {
            alert("Insufficient balance");
            return;
        }


        setBalance(prev => prev - bill.amount);
        setPaidBills(prev => [...prev, bill.id]);

        alert("Bill paid successfully");
        navigate("/bills");
    };


    return (
        <div className="max-w-5xl mx-auto p-6 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT COLUMN */}
            <div className="relative flex items-center justify-center bg-gray-100 rounded-lg p-10">
                <img
                    src={bill.icon}
                    alt={bill.organization}
                    className="w-48 h-48 object-contain"
                />

                {/* Bill type icon bottom-right */}
                <img
                    src={bill.icon}
                    alt={bill.bill_type}
                    className="w-14 h-14 absolute bottom-4 right-4"
                />
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold capitalize">
                    {bill.organization}
                </h2>

                <p className="text-gray-600 capitalize">
                    Bill Type: {bill.bill_type}
                </p>

                <p className="text-xl font-semibold">
                    Amount: ₹{bill.amount}
                </p>

                <p className="text-gray-500">
                    Due Date: {new Date(bill.due_date).toLocaleDateString()}
                </p>

                <p className="text-sm">
                    Current Balance: ₹{balance}
                </p>

                <button
                    onClick={handlePayBill}
                    disabled={isPaid}
                    className={`mt-6 px-6 py-3 rounded text-white ${isPaid
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-emerald-600 hover:bg-emerald-700"
                        }`}
                >
                    {isPaid ? "Paid" : "Pay Bill"}
                </button>

            </div>

        </div>
    );
};

export default SingleBill;