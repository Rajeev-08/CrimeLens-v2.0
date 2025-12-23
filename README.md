---

# 🕵️‍♂️ CrimeLens

> **Intelligent Crime Analytics & Safety Prediction Dashboard**

**CrimeLens** is a next-generation crime intelligence platform. It combines historical data analysis, machine learning forecasting, 3D geospatial visualization, and Generative AI to provide actionable safety insights for citizens and analysts alike.

---

## 🚀 Key Features

* **📊 Interactive Dashboard:** Upload crime datasets (CSV) and filter by area, crime type, and severity in real-time.
* **🌍 3D Geospatial Mapping:** Visualize crime density using Hexbin layers and 3D extrusion (powered by **Deck.gl**).
* **🤖 Predictive AI:**
* **Risk Prediction:** Uses **XGBoost** to classify crime severity based on spatio-temporal features.
* **Time-Series Forecasting:** Uses **Prophet** to predict future crime trends over the next 12 months.


* **🛡️ Safe Routing:** Calculates the safest walking path between two points versus the fastest path using **OSMnx** and graph theory.
* **📰 Public Perception Engine:** Analyzes local news headlines using NLP to generate a real-time "Fear Index" and sentiment analysis.
* **💬 AI Safety Assistant:** A built-in chatbot powered by **Google Gemini** that provides context-aware safety tips and report summaries.
* **🟣 User Reporting:** Crowdsourcing capability allowing users to drop pins and report incidents directly on the map.
* **📄 PDF Reporting:** One-click generation of professional intelligence reports with snapshots and AI summaries.

---

## 🛠️ Tech Stack

### Frontend

* **Framework:** React 18
* **Styling:** Tailwind CSS, Flowbite
* **Maps:** React-Leaflet (2D), Deck.gl & MapLibre (3D)
* **Visualization:** Chart.js (Analytics), OGL (WebGL visual effects)
* **State Management:** React Hooks

### Backend

* **Framework:** FastAPI (Python)
* **Data Processing:** Pandas, NumPy
* **Machine Learning:** Scikit-learn (KMeans Clustering), XGBoost, Prophet
* **Geospatial:** OSMnx, NetworkX
* **NLP:** TextBlob
* **Generative AI:** Google Generative AI (Gemini 1.5 Flash)

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16+)
* Python (v3.9+)
* A Google Gemini API Key
* (Optional) NewsAPI Key

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

```

**Configuration:**
Create a `.env` file in the `backend/` directory:

```env
GOOGLE_API_KEY=your_gemini_api_key_here
NEWS_API_KEY=your_newsapi_key_here

```

**Run the Server:**

```bash
# From the backend directory
uvicorn app.main:app --reload

```

*The backend API will start at `http://localhost:8000*`

### 2. Frontend Setup

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the application
npm start

```

*The frontend will launch at `http://localhost:3000*`

---

## 📖 Usage Guide

1. **Welcome Screen:** Click "Launch Dashboard" to enter the main interface.
2. **Upload Data:** On the sidebar, click "Choose File" and upload a CSV file containing crime data.
* *Note:* The CSV must contain columns for `DATE OCC`, `TIME OCC`, `LAT`, `LON`, `Crm Cd Desc` (Crime Description), and `AREA NAME`.


3. **Explore Tabs:**
* **Unified Map:** View heatmaps, hotspots, police stations, hospitals, and report incidents. Use the "Navigate" button to find safe routes.
* **3D Density:** View a 3D hexagonal density map of crime clusters.
* **Time-Series:** View historical trends and a 12-month AI forecast.
* **Severity:** Analyze the breakdown of High, Medium, and Low severity crimes.
* **Prediction:** Train an XGBoost model on your current dataset to see feature importance and accuracy.
* **Public Perception:** Enter a city name to scrape news and gauge public sentiment.


4. **AI Assistant:** Click the floating chat icon in the bottom right to ask safety questions or request data summaries.
5. **Export:** Click "Export Report" to generate a PDF summary of the current view.

---

## 📂 Project Structure

```
CrimeLens/
├── backend/
│   ├── app/
│   │   ├── services/       # ML, Routing, and Analysis logic
│   │   ├── main.py         # FastAPI entry point & endpoints
│   │   └── models.py       # Pydantic models
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI, Charts, 3D/WebGL effects
│   │   ├── services/       # API integration
│   │   ├── views/          # Main pages and Dashboard Tabs
│   │   └── App.js
│   └── package.json
└── README.md

```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⚠️ Disclaimer

This tool is intended for analytical and educational purposes. Risk predictions and routing suggestions are based on historical data/algorithms and should not be the sole basis for safety decisions in real-world scenarios.

---

## 📄 License

Distributed under the MIT License.
