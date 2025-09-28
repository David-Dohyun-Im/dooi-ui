import { GradientButton } from "../ui/gradient-button"

function Demo() {
  return (
    <div className="flex gap-8">
      <GradientButton>Get Started</GradientButton>
      <GradientButton variant="secondary">Get Started</GradientButton>
    </div>
  )
}

export { Demo }