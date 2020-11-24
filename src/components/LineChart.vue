<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      dataChart: [2, 10, 5, 9],
      dataMonths: ["Jan", "Feb", "Mar", "Apr",]
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.dataMonths,
        datasets: [
          {
            label: "Data 1",
            data: this.dataChart,
            backgroundColor: "transparent",
            borderColor: "rgba(20, 235, 162, 0.50)",
            pointBackgroundColor: "rgba(5, 160, 109, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Top Up"
        }
      }
    );
  }
};
</script>