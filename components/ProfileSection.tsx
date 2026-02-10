import Image from "next/image";

function calculateAge(): number {
  const today = new Date();
  const birthDate = new Date(2005, 4, 1); // 2005年5月生まれ（月は0始まり）
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export function ProfileSection() {
  const age = calculateAge();

  return (
    <div className="flex flex-col items-center gap-8 mb-16">
      <Image
        src="/my-icon.webp"
        alt="石黒 隼大"
        width={160}
        height={160}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
        priority
      />

      <div className="text-center">
        <h1 className="mb-2">石黒 隼大</h1>
        <div className="text-muted-foreground mb-4 space-y-1.5">
          <p>{age}歳 / 2028卒</p>
          <p>公立はこだて未来大学</p>
          <p>システム情報科学部 情報アーキテクチャ学科</p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">
            Web開発
          </span>
          <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">
            モバイル開発
          </span>
          <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">
            フロントエンド開発
          </span>
          <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">
            バックエンド開発
          </span>
        </div>
      </div>
    </div>
  );
}
