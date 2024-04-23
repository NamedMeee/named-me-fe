import ProfileEmoji from '@assets/svgs/ProfileEmoji.svg';

export default function ProfileImageBox() {
  return (
    <div className="w-[142px] h-[142px] shadow-md rounded-full bg-white flex items-center justify-center border-[1px] border-[#F2F2F2]">
      <div className="text-center">
        <div className="flex items-center justify-center mb-[6px]">
          <ProfileEmoji />
        </div>
        <div className="text-center content_normal text-[12px] leading-4">
          프로필 사진
          <br />
          설정하기
        </div>
      </div>
    </div>
  );
}
