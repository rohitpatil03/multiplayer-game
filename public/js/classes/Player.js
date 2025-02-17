class Player {

  constructor({ x, y, radius, color, speed, projectileRadius, projectileSpeed, username, health, healthBar,projectileDamage }) {

    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.speed = speed
    this.effect = ''
    this.effectTime = -1
    this.projectileRadius = projectileRadius
    this.projectileSpeed = projectileSpeed
    this.health = health
    this.healthBar = healthBar
    this.username = username
    this.projectileDamage = projectileDamage
  }

  draw() {
    c.font = '12px sans-serif'
    c.fillStyle = 'white'
    c.fillText(this.username, this.x - this.username.length*5/2, this.y + this.radius + 25)
    c.fillStyle = 'white'
    c.fillRect(this.x-this.healthBar/2, this.y+this.radius+5, this.healthBar, 5)
    c.fillStyle = 'limegreen'
    c.shadowColor = 'limegreen'
    c.shadowBlur = 5
    c.fillRect(this.x-this.healthBar/2, this.y+this.radius+5, this.health, 5)
    c.save()
    c.shadowColor = this.color
    c.shadowBlur = 20
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.restore()
  }

  updateRadius(radius){
    this.radius = radius
  }

  updateEffect(effect, effectTime){
    this.effect = effect
    this.effectTime = effectTime
  }
}
