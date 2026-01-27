import { useEffect, useState } from "react";

interface Data {
  ip: string;
  city: string;
  actual: string;
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Weather = () => {
  const [data, SetDataa] = useState<Data | null>(null);
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}`);
        const getit = await res.json();
        SetDataa(getit);
      } catch (err) {
        console.error("Error tracking visit:", err);
      }
    };
    trackVisit();
  }, []);
  const weather = data?.actual;
  const city = data?.city;

  const weatherVisuals: Record<
    string,
    { img: string; color: string; message: (w: string, c: string) => string }
  > = {
    Sunny: {
      img: "https://i.pinimg.com/originals/65/98/31/6598313112d22526d2931969c8cf57d8.gif",
      color: "shadow-amber-100/20",
      message: (w, c) => `Glad to know it’s ${w.toLowerCase()} in ${c}`,
    },
    "Partly Cloudy": {
      img: "https://i.pinimg.com/originals/58/2f/bb/582fbb4259b2ea8f182844686ba7f39c.gif",
      color: "shadow-sky-100/20",
      message: (w, c) => `Seems ${w.toLowerCase()} skies over ${c}`,
    },
    Cloudy: {
      img: "https://i.pinimg.com/originals/de/d7/d1/ded7d113506d8d4287f893a3c01a0323.gif",
      color: "shadow-zinc-200/20",
      message: (w, c) => `${c} is wrapped in ${w.toLowerCase()} skies today`,
    },
    Foggy: {
      img: "https://i.pinimg.com/originals/74/45/0d/74450d7eca072da5a97bf7e41313618e.gif",
      color: "shadow-gray-100/30",
      message: (w, c) => `${c} looks quite ${w.toLowerCase()} right now`,
    },
    Drizzle: {
      img: "https://i.pinimg.com/originals/0e/59/55/0e59557c84793946019c9ab5a2438ed0.gif",
      color: "shadow-blue-200/30",
      message: (w, c) => `Light ${w.toLowerCase()} over ${c}`,
    },
    "Freezing Rain": {
      img: "https://i.pinimg.com/originals/90/47/8c/90478cce1b1954f4283ea98a5b433c9a.gif",
      color: "shadow-cyan-100/30",
      message: (w, c) => `${w} falling in ${c} — stay warm!`,
    },
    Rainy: {
      img: "https://i.pinimg.com/originals/d9/e9/3f/d9e93f5ce187a25330775a0ba5aaf006.gif",
      color: "shadow-blue-300/30",
      message: (w, c) => `Looks like it’s ${w.toLowerCase()} in ${c}`,
    },
    Snowy: {
      img: "https://i.pinimg.com/originals/fa/ae/65/faae656df5906380cdd8323b4b42145a.gif",
      color: "shadow-slate-100/30",
      message: (w, c) => `${c} is covered in ${w.toLowerCase()} bliss ❄️`,
    },
    Stormy: {
      img: "https://i.pinimg.com/originals/a2/75/0e/a2750ea85f34b50b9cb30d870b720b97.gif",
      color: "shadow-purple-200/40",
      message: (w, c) => `${w} Thunder rolls over ${c} — stay safe! ⚡`,
    },
  };

  return (
    <div>
      {weather && weatherVisuals[weather] && (
        <div className="mb-10 mt-6 pt-6">
          <img
            src={weatherVisuals[weather].img}
            alt={`${weather} weather`}
            className={`mx-auto w-[280px] sm:w-[320px] md:w-[480px] rounded-xl shadow-lg ${weatherVisuals[weather].color}`}
          />
          <p className="justify-center pt-5 text-amber-200 font-mono">
            {weatherVisuals[weather].message(weather, city || "your area")}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
