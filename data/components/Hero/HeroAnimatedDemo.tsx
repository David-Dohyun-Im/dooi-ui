import { AnimatedContainer,
  BgGradient,
  Hero,
  TextStagger } from "../ui/hero-animated"
import { Button } from "../ui/button-3"
export function HeroAnimatedDemo() {

    return (
        <Hero className="space-y-4  px-6 py-12  text-zinc-100 md:px-10 lg:px-12">
        <BgGradient
          gradientColors={"blue"}
          gradientSize="lg"
        />
        <TextStagger
          className="text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
          text="Your Next Website hero"
        />
        <AnimatedContainer className="mx-auto w-4/5 text-muted/80 md:w-1/2">
          <p>
            Hero section creatd with react and tailwindcss, fully responsive and
            customizable with various designs and animations.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          className="flex items-center justify-center gap-4"
          transition={{ delay: 0.6 }}
        >
          <Button size={"lg"} variant={"secondary"} className="rounded-full">
            Get Started
          </Button>
          <Button size={"lg"} variant={"outline"} className="rounded-full bg-transparent">
            Learn More
          </Button>
        </AnimatedContainer>
      </Hero>
    )
}