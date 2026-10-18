import {
  OrganizationSwitcher,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export function AccountControls() {
  return (
    <>
      <Show when="signed-out">
        <SignInButton><button className="button">Sign in</button></SignInButton>
        <SignUpButton><button className="button">Sign up</button></SignUpButton>
      </Show>
      <Show when="signed-in">
        <OrganizationSwitcher
          hidePersonal
          afterSelectOrganizationUrl="/"
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/choose-organization"
        />
        <UserButton />
      </Show>
    </>
  );
}
