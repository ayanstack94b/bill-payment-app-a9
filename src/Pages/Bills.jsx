import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Bills = () => {
    const bills = useLoaderData()
    const navigate = useNavigate()
    // console.log(bills);

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-4">
            <h1 className="text-3xl font-bold mb-6">Bills</h1>

            {bills.map(bill => (
                <div
                    key={bill.id}
                    className="p-6 rounded-lg shadow dark:bg-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6"
                >
                    {/* Left */}
                    <div className="flex items-center gap-4">
                        <img src={bill.icon} className="w-12 h-12" />
                        <div>
                            <h2 className="text-xl font-bold capitalize">
                                {bill.bill_type}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {bill.organization}
                            </p>
                            <p className="text-sm text-gray-500">
                                Due: {new Date(bill.due_date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="text-right space-y-2">
                        <p className="text-lg font-bold">₹{bill.amount}</p>
                        <button
                            onClick={() => navigate(`/bills/${bill.id}`)}
                            className="px-6 py-2 bg-emerald-600 text-white rounded"
                        >
                            Pay
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bills;