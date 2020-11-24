<script>
import { Line, mixins } from 'vue-chartjs'
import { mapGetters } from 'vuex'
const { reactiveProp } = mixins
export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      dataMonths: ['Jan', 'Feb', 'March', 'April'],
      dataCharts: ['10', '20', '12', '7'],
      gradient: null,
      gradient2: null,
      chartdata: {
        labels: ['Jan', 'Feb'],
        datasets: [
          {
            label: 'Pembayaran',
            borderColor: '#14eba2',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: [],
            data: [10, 12]
          }
        ]
      },
      options: {
        responsive: true, 
        maintainAspectRatio: false
      },
    }
  },
  mixins: [reactiveProp],
  created() {
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0,0,0,450);
    this.gradient2 = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0,0,0,450)
    this.gradient.addColorStop(0, 'rgba(20, 235, 162, .5)')
    this.gradient.addColorStop(.5, 'rgba(20, 235, 162, .25)')
    this.gradient.addColorStop(1, 'rgba(20, 235, 162, 0)')

    this.gradient2.addColorStop(0, 'rgb(20, 235, 162)')
    this.gradient2.addColorStop(.5, 'rgb(20, 235, 162)')
    this.gradient2.addColorStop(1, 'rgb(20, 235, 162)')

    this.renderChart({
      labels: ['Agus' ,'Sept', 'Okto', 'Nov'],
        datasets: [
          {
            label: 'Pembayaran',
            borderColor: '#14eba2',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: [10, 23, 12, 14]
          }
        ]
    }, this.options)
    this.getDataPayment()
  },
  computed: {
    ...mapGetters({
      api: 'Api/getApi',
      web: 'Api/getWeb'
    })
  },
  methods: {
    getDataPayment() {
      this.$http.get(`${this.api}getting/data/dashboard`)
      .then((response) => {
        console.log(response)
        this.chartdata.labels = response.data.data.month
        console.log(this.chartdata.labels)
        this.chartdata.datasets.backgroundColor = this.gradient
        this.chartdata.datasets.data = response.data.data.payments
      })
    }
  }
}
</script>