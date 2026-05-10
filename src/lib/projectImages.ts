const allImages = import.meta.glob('@/assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true });

export function getProjectCover(slug: string): string | undefined {
  const entries = Object.entries(allImages).filter(([path]) =>
    path.includes(`/projects/${slug}/`)
  ) as [string, { default: string }][];

  if (entries.length === 0) return undefined;

  const main = entries.find(([path]) => /\/main\.(jpg|jpeg|png|webp)$/i.test(path));
  if (main) return main[1].default;

  return entries[0][1].default;
}
