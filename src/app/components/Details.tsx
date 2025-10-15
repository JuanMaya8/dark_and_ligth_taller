export default function Details({ details }: { details: any }) {
  return (
    <div className="col-span-12 rounded-2xl bg-white dark:bg-[#1C1C1C] p-6">
      <h3 className="text-black dark:text-white text-2xl font-bold mb-4">Details</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-lg">
          <span>👤</span>
          <span className="text-gray-600 dark:text-gray-400">{details.age}</span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 bg-[#2C2C2C] rounded-lg">
          <span>✉️</span>
          <span className="text-gray-400">{details.email}</span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 bg-[#2C2C2C] rounded-lg">
          <span>📞</span>
          <span className="text-gray-400">{details.phone}</span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 bg-[#2C2C2C] rounded-lg">
          <span>📍</span>
          <span className="text-gray-400">{details.country}</span>
        </div>
      </div>
    </div>
  );
}
