"use client";
import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  floatRotationIntensity?: number;
  floatFloatIntensity?: number;
  floatFloatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  ({
    flavor = "blackCherry",
    floatSpeed = 1.5,
    floatRotationIntensity = 1,
    floatFloatIntensity = 1,
    floatFloatingRange = [-0.1, 0.1],
    children,
    ...props
  }, ref) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={floatRotationIntensity}
          floatIntensity={floatFloatIntensity}
          floatingRange={floatFloatingRange}
        >
          {children}
          <SodaCan flavor={flavor}/>
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
