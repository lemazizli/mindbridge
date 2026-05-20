type Psychologist = {
  name: string;
  specialty: string;
  rating: number;
  languages: string[];
  price: number;
  photo: string;
};
export default function PsychologistCard({ name, specialty, rating, languages, price, photo }: Psychologist) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 overflow-hidden">
        {photo ? <img src={photo} alt={name} className="w-full h-full object-cover" /> : null}
      </div>
      <div className="font-bold mb-1">{name}</div>
      <div className="text-[13px] opacity-70 mb-1">{specialty}</div>
      <div className="text-xs mb-1">Dillər: {languages.join(', ')}</div>
      <div className="text-yellow-500">{rating} ★</div>
      <div className="mt-2 text-sm font-semibold">{price}₼ / sessiya</div>
      <button className="mt-3 px-4 py-1 bg-primary text-white rounded">Rezervasiya et</button>
    </div>
  );
}
