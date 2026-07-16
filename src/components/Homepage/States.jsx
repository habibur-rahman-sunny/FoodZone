
const States = () => {
    const stats = [
        {
            label: 'Total Orders Delivered',
            value: '29.6M',
            growth: '21% More Than Last Month',
        },
        {
            label: 'Total Customer Reviews',
            value: '906K',
            growth: '46% More Than Last Month',
        },
        {
            label: 'Available Food Items',
            value: '132+',
            growth: '31 New Items Added',
        },
    ];

    return (
        <section className="bg-purple-600 py-16 px-4">
            <div className="max-w-6xl mx-auto text-white text-center">
                {/* Sub-heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Trusted By Millions
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <p className="text-purple-200 text-sm mb-2 uppercase tracking-wide">
                                {stat.label}
                            </p>
                            <h3 className="text-5xl md:text-6xl font-extrabold mb-3">
                                {stat.value}
                            </h3>
                            <p className="text-purple-100 text-sm opacity-80">
                                {stat.growth}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default States;
