import ProfileEmoji from '@assets/svgs/ProfileEmoji.svg';

export default function ProfileImageBox() {
  return (
    <div className="flex h-[142px] w-[142px] items-center justify-center rounded-full border-[1px] border-[#F2F2F2] bg-white shadow-md">
      <div className="text-center">
        <div className="mb-[6px] flex items-center justify-center">
          <ProfileEmoji />
        </div>
        <div className="content_normal text-center text-[12px] font-light leading-4 tracking-tight">
          프로필 사진
          <br />
          설정하기
        </div>
      </div>
    </div>
  );
}
