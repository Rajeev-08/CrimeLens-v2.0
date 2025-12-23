

---

# 🕵️‍♂️ CrimeLens

### Intelligent Crime Analytics & Safety Prediction Dashboard

**CrimeLens** is a next-generation crime intelligence and public safety platform that integrates historical crime analysis, machine learning predictions, geospatial visualization, and generative AI to deliver actionable insights for citizens, researchers, and law enforcement analysts.

---

## 🚀 Key Features

### 📊 Interactive Dashboard

* Upload crime datasets (CSV format)
* Filter by location, crime type, date, and severity
* Real-time visual updates

### 🌍 3D Geospatial Visualization

* Crime density visualization using **Hexbin layers**
* 3D extrusions for hotspot intensity
* Powered by **Deck.gl** and **MapLibre**

### 🤖 Predictive AI Engine

* **Crime Severity Prediction:**
  Uses **XGBoost** to classify crime severity based on spatial and temporal features
* **Time-Series Forecasting:**
  Uses **Facebook Prophet** to forecast crime trends for the next 12 months

### 🛡️ Safe Routing System

* Computes:

  * Fastest route
  * Safest route (crime-aware)
* Built using **OSMnx** and **NetworkX**

### 📰 Public Perception Engine

* Scrapes local news headlines
* Performs sentiment analysis
* Generates a real-time **Fear Index** using NLP

### 💬 AI Safety Assistant

* Conversational chatbot powered by **Google Gemini**
* Provides:

  * Safety tips
  * Area-based summaries
  * Incident explanations

### 🟣 User Crime Reporting

* Crowdsourced incident reporting
* Users can drop pins directly on the map

### 📄 PDF Intelligence Reports

* One-click export
* Includes charts, maps, and AI-generated summaries

---

## 🛠️ Tech Stack

### Frontend

* **Framework:** React 18
* **Styling:** Tailwind CSS, Flowbite
* **Maps:** React-Leaflet (2D), Deck.gl + MapLibre (3D)
* **Visualization:** Chart.js, OGL (WebGL effects)
* **State Management:** React Hooks

### Backend

* **Framework:** FastAPI (Python)
* **Data Processing:** Pandas, NumPy
* **Machine Learning:**

  * Scikit-learn (Clustering)
  * XGBoost (Risk Prediction)
  * Prophet (Time-Series Forecasting)
* **Geospatial:** OSMnx, NetworkX
* **NLP:** TextBlob
* **Generative AI:** Google Gemini 1.5 Flash

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16+)
* Python (v3.9+)
* Google Gemini API Key
* (Optional) NewsAPI Key

---

### 🔹 Backend Setup

```bash
cd backend

python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
```

#### Environment Configuration

Create a `.env` file inside `backend/`:

```env
GOOGLE_API_KEY=your_gemini_api_key_here
NEWS_API_KEY=your_newsapi_key_here
```

#### Run Backend Server

```bash
uvicorn app.main:app --reload
```

Backend will run at:
**[http://localhost:8000](http://localhost:8000)**

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run at:
**[http://localhost:3000](http://localhost:3000)**

---

## 📖 Usage Guide

1. **Launch Dashboard**

   * Open the frontend and click **“Launch Dashboard”**

2. **Upload Crime Dataset**

   * CSV must contain:

     * `DATE OCC`
     * `TIME OCC`
     * `LAT`
     * `LON`
     * `Crm Cd Desc`
     * `AREA NAME`

3. **Explore Dashboard Tabs**

   * **Unified Map:** Heatmaps, hotspots, safe routing
   * **3D Density:** Hexagonal crime density map
   * **Time-Series:** Historical data + 12-month forecast
   * **Severity Analysis:** Crime severity distribution
   * **Prediction:** Train XGBoost model & view feature importance
   * **Public Perception:** News sentiment & fear index

4. **AI Safety Assistant**

   * Click the floating chat icon
   * Ask safety or analytical questions

5. **Export Report**

   * Generate professional PDF reports instantly

---

## 📂 Project Structure

```
CrimeLens/
├── backend/
│   ├── app/
│   │   ├── services/        # ML, routing, analytics logic
│   │   ├── main.py          # FastAPI entry point
│   │   └── models.py        # Pydantic schemas
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/      # UI components & charts
│   │   ├── services/        # API integration
│   │   ├── views/           # Dashboard views
│   │   └── App.js
│   └── package.json
└── README.md
```


---

## ⚠️ Disclaimer

CrimeLens is designed for **educational and analytical purposes only**.
Predictions and safety routes are based on historical data and algorithms and should **not** be the sole basis for real-world safety decisions.

---

## 📄 License

Distributed under the **MIT License**.

---
