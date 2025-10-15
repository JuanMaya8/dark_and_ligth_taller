interface PersonalDetails {
  age: string | number;
  email: string;
  phone: string;
  country: string;
}

interface DetailsDict {
  details: string;
}

export default function Details({ details, dict }: { details: PersonalDetails, dict: DetailsDict }) {
  return (
    <div className="col-span-12 rounded-2xl bg-foreground p-6">
      <div className="flex gap-4 items-center">
        <h3 className="text-xl font-bold text-white border-r border-gray-700 pr-4">{dict.details}</h3>
        <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 px-4 py-2 bg-background rounded-lg">
          <span>👤</span>
          <span className="text-white">{details.age}</span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 bg-background rounded-lg">
          <span>✉️</span>
          <span className="text-white">{details.email}</span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 bg-background rounded-lg">
          <span>📞</span>
          <span className="text-white">{details.phone}</span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 bg-background rounded-lg">
          <span>📍</span>
          <span className="text-white">{details.country}</span>
        </div>
      </div>
    </div>
      </div>
  );
}
