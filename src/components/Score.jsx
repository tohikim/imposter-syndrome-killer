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
                backgroundColor: ["dodgerblue", "tomato"],
                borderColor: ["var(--color-navy)", "var(--color-third)"],
                circumference: 180,
                borderWidth: 0,
                rotation: 270,
              },
            ],
          }}
          options={{}}
          style={{
            width: `${GRAPH_WIDTH_IN_VIEW_WIDTH}vw`,
          }}
        />
        <h1
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: 60,
            left: `calc(${GRAPH_WIDTH_IN_VIEW_WIDTH / 2}vw - ${ARBITRARY_PROGRESS_PERCENTAGE_BOX_WIDTH / 2}px)`,
            width: `${ARBITRARY_PROGRESS_PERCENTAGE_BOX_WIDTH}px`,
          }}
        >
          40%
        </h1>
      </div>
    </>
  );
};

const GRAPH_WIDTH_IN_VIEW_WIDTH = 80;
const ARBITRARY_PROGRESS_PERCENTAGE_BOX_WIDTH = 80;

const styles = {
  doughnutContainer: {
    position: "relative",
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
