#version 450 core

layout (location = 0) out vec4 f_color;

uniform vec4 color;

void main() {
	f_color = color;
}