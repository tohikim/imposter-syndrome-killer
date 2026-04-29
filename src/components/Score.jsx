import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Score = () => {
  return (
    <>
      <h6 style={styles.h6}>Your Readiness Score</h6>
      <div style={styles.doughnutContainer}>
        <Doughnut
          data={{
            datasets: [
              {
                data: [4, 6],
                backgroundColor: ["#002e57", "#002e5725"],
                circumference: 180,
                borderWidth: 0,
                rotation: 270,
              },
            ],
          }}
          plugins={[
            {
              id: "centerText",
              afterDatasetsDraw(chart) {
                const { ctx } = chart;
                const meta = chart.getDatasetMeta(0);
                const x = meta.data[0].x;
                const y = meta.data[0].y;

                ctx.save();
                const text = "40%";
                ctx.font = "bold 50px Arial";
                ctx.fillStyle = "#002e57";
                ctx.textAlign = "center";
                ctx.textBaseline = "bottom";
                ctx.fillText(text, x, y + 5);
                ctx.restore();
              },
            },
          ]}
          options={{
            cutout: "89%",
            aspectRatio: 2,
            maintainAspectRatio: true,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
            },
          }}
          style={{
            width: `${GRAPH_WIDTH_IN_VIEW_WIDTH}vw`,
          }}
        />
      </div>
    </>
  );
};

const GRAPH_WIDTH_IN_VIEW_WIDTH = 80;

const styles = {
  doughnutContainer: {
    position: "relative",
    padding: "2rem 0 3rem 0",
  },
  h6: {
    fontSize: "18px",
    paddingBottom: "0.7rem",
    marginBottom: "0.2rem",
    fontWeight: "400",
    alignSelf: "flex-start",
  },
};

export default Score;
