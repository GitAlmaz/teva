<template>
	<div>
		<main class="painting">
			<div class="container" ref="container">
				<canvas
					ref="canvas"
					@mousedown="start"
					@mousemove="mouseDraw"
					@mouseup="finish"
					@touchstart="start"
					@touchmove="touchDraw"
					@touchend="finish"
					width="1000px"
					height="300px"
				>
					your browser is not supported canvas
				</canvas>
			</div>
		</main>
		<div class="container">
			<NavigationBar>
				<template v-slot:rightContent>
					<BtnNavigation :back="true" innerText="Назад" />
					<BtnNavigation innerText="Сбросить" @click="reset" />
					<BtnNavigation innerText="Готово" :green="true" />
				</template>
			</NavigationBar>
		</div>
	</div>
</template>
<script>
import NavigationBar from '@/components/modules/NavigationBar'
import BtnNavigation from '@/components/UI/BtnNavigation'

export default {
	name: 'Painting',
	components: {
		NavigationBar,
		BtnNavigation
	},
	data() {
		return {
			ctx: null,
			painting: false,
			lineWidth: 5
		}
	},
	methods: {
		start(e) {
			this.painting = true
			this.draw(e.offsetX, e.offsetY)
			this.ctx.beginPath()
		},
		mouseDraw(e) {
			if (this.painting) {
				this.draw(e.offsetX, e.offsetY)
			}
		},
		finish(e) {
			this.painting = false
			this.ctx.beginPath()
		},
		draw(x, y) {
			this.ctx.lineTo(x, y)
			this.ctx.stroke()
			this.ctx.beginPath()
			this.ctx.arc(x, y, this.lineWidth, 0, Math.PI * 2)
			this.ctx.fill()
			this.ctx.beginPath()
			this.ctx.moveTo(x, y)
		},
		touchDraw(e) {
			e.preventDefault()
			if (this.painting) {
				const x = e.touches[0].clientX - 15
				const y = e.touches[0].clientY - 50
				this.draw(x, y)
			}
		},
		reset() {
			this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
		}
	},
	mounted() {
		this.ctx = this.$refs.canvas.getContext('2d')
		this.ctx.canvas.width = this.$refs.container.offsetWidth - 30
		this.ctx.canvas.height = this.$refs.container.offsetHeight
		this.ctx.lineWidth = this.lineWidth * 2
		this.ctx.strokeStyle = 'black'
	}
}
</script>

<style></style>
